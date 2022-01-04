import { StringLiteral } from 'typescript';

export interface IEditUser {
	id?: string
	Name: string, 
	Surname: string,
	Email: string
}

export interface IEditResponse {
	message: StringLiteral
}

