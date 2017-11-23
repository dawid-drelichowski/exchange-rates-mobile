//@flow
export type Rate = {|country: string, currency: string, purchase: number, sale: number|};
export type rates = Array<Rate>