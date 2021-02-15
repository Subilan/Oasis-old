declare module "*.yml" {
    export interface OasisConfiguration {
        backgroundImage: string
    }

    const config: OasisConfiguration;
    export default config;
}