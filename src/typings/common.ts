import {Dayjs} from 'dayjs';

export interface Common {
    readonly id: number;
}

export type CommonDate = Date | Dayjs | string;

export interface PasswordData {
    password: string;
    confirmPassword: string;
}
