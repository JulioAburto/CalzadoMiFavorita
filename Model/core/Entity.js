import { ApiDatabase } from "./ApiDatabase";
class Entity {
	constructor(props) {
		for (const prop in props) {
			this[prop] = curso[prop];
		}
	}
	ApiRoute = "";
	ApiMethods = {
		Get: this.__proto__.constructor.name,
		Set: "ApiSet",
		Update: "ApiUpdate",
	};
	Get = async (Param = "") => {};
}
export { Entity };
