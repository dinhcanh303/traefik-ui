export interface Router {
    id: string | null;
    name: string;
    type: string;
    address: string | null;
    authResponseHeaders: [string] | null;
    trustForwardHeader: boolean;
}
export type Routers = Router[]