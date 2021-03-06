import Ajv from 'ajv'
export const ajv = new Ajv()

const RegistrationSchema = {
    type: "object",
    properties: {
        Username: {type: "string", pattern: "\w@(gmail.)?latech.edu"},
        Password: {type: "string"},
        FirstName: {type: "string"},
        LastName: {type: "string"}
    },
    required: ["Username", "Password", "FirstName", "LastName"],
    additionalProperties: false
}

const validate = ajv.addSchema(RegistrationSchema, "registration")