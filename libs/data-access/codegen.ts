import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://countries.trevorblades.com/graphql',
  documents: 'libs/data-access/src/lib/graphql/**/*.graphql',
  generates: {
    'libs/data-access/src/lib/generated/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular', 'fragment-matcher']
    }
  }
};

export default config;
