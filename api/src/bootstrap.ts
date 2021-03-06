import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import {database} from "./database";

// Load the modules before the app runs
dotenv.config();
database();

import {web} from "./routes/web";
import * as v1ApiRoutes from "./routes/api-v1";

export class Bootstrap {
    public app: any;

    /**
     * Bootstrap constructor.
     */
    constructor() {
        this.app = express();
        this.configure();
        this.loadMiddlewares();
    }

    /**
     * Configure the app.
     */
    private configure(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({"extended": false}));
        this.app.use("/", web);
        this.app.use("/api/v1", v1ApiRoutes);
    }

    /**
     * Load middlewares.
     */
    private loadMiddlewares(): void {
        // Load middlewares here.
    }
}
