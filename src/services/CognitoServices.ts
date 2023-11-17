import { CognitoUserPool } from "amazon-cognito-identity-js";

export class CognitoServices {
    constructor(
        private userPoolId: string,
        private userPoolClient: string
    ) {}

    public signUp = (email: string, password : String) : Promise<any> => {
        return new Promise<any>((resolve, reject) => { 

        });
    }
}