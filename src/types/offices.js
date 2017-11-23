//@flow
export type Office = {|
  map: ?{latitude: number, longitude: number, title: ?string, description: ?string},
  name: ?string,
  street: string,
  city: string,
  phoneNumber: string
|};

export type offices = Array<Office>;