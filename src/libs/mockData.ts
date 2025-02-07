import {randomLowercase} from '@/libs/generate';

import {AccountDTO, ROLES} from '@/store/account/types';

export const mockAccount: AccountDTO = {
    user: {
        id: 1,
        username: 'demo',
        first_name: 'John',
        last_name: 'Doe',
        email: `${randomLowercase(6)}@example.com`,
        role: ROLES.ADMIN,
    },
    access_token: '0000-0000',
    refresh_token: '0000-0000',
};

export const MOCK_USERNAME = import.meta.env.VITE_USERNAME;
export const MOCK_PASSWORD = import.meta.env.VITE_PASSWORD;

// export class GenerateUser {
//     private readonly response: UserDTO;
//
//     private generator(): UserDTO {
//         return {
//             id: randomInt(),
//             username: randomLowercase(),
//             email: `${randomLowercase(6)}@example.com`,
//             first_name: randomUppercase(),
//             last_name: randomUppercase(),
//             role: GRANT_ALL[randomInt(0, GRANT_ALL.length)],
//         };
//     }
//
//     constructor() {
//         this.response = this.generator();
//     }
//
//     public get(): UserDTO {
//         return this.response;
//     }
// }
//
// export class GenerateUsers {
//     private readonly response: Array<UserDTO> = [];
//
//     constructor() {
//         this.response = new Array(10).map(() => new GenerateUser().get());
//     }
//
//     public get(): Array<UserDTO> {
//         return this.response;
//     }
// }
