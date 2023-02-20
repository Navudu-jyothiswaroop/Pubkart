type address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: any;
};
export default class UsersModel {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public address: address,
    public phone: number,
    public website: string,
    public company: { name: string; catchPhrase: string; bs: string }, // company type
  ) {}
}
