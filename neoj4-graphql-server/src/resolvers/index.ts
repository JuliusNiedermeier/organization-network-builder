import { OGM } from "@neo4j/graphql-ogm";
import { typeDefs } from "../typeDefs";

export const resolvers = {
  Query: {
    companyNetwork: async (parent: any, args: any, context: any) => {
      const ogm = new OGM({ typeDefs, driver: context.driver });
      await ogm.init();

      const populate = async (companyID: string, exclude: string[] = []) => {
        const [company] = await ogm.model("Company").find({
          where: { ID: companyID },
          selectionSet: `{ ID holdings { ID } subsidiaries { ID } }`,
        });

        const holdings = await Promise.all(
          company.holdings
            .filter(({ ID }: any) => !exclude.includes(ID))
            .map((holding: any) =>
              populate(holding.ID, [...exclude, company.ID])
            )
        );

        const subsidiaries = await Promise.all(
          company.subsidiaries
            .filter(({ ID }: any) => !exclude.includes(ID))
            .map((subsidiary: any) =>
              populate(subsidiary.ID, [...exclude, company.ID])
            )
        );

        return [
          {
            ID: company.ID,
            holdings: company.holdings.map(({ ID }: any) => ID),
            subsidiaries: company.subsidiaries.map(({ ID }: any) => ID),
          },
          ...holdings.flat(),
          ...subsidiaries.flat(),
        ];
      };

      const network = await populate(args.ID);

      return network;
    },
  },
};
