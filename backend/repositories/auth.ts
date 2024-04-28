import type { Connection } from "mysql2/promise"

import { User } from "../entities"

interface AuthRepository {
    connection: Connection;

    authenticate(username: string, password: string): Promise<{ user: User, token: string }>;
    register(username: string, password: string): Promise<{ user: User, token: string }>;
}

export class SQLAuthRepository implements AuthRepository {
    connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    async authenticate(username: string, password: string): Promise<{ user: User; token: string; }> {
        throw new Error("Method not implemented.");
    }

    async register(username: string, password: string): Promise<{ user: User; token: string; }> {
        throw new Error("Method not implemented.");
    }
}

