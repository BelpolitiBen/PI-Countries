/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Activity, conn } = require("../../src/db.js");

const agent = session(app);
const activity1 = {
    activityName: "Ski",
    difficulty: 3,
    duration: 150,
    season: ["Winter"],
    countries: ["Andorra", "Japan"],
};
const activity2 = {
    activityName: "Fly",
    difficulty: 4,
    duration: 180,
    season: ["Spring, Fall"],
    countries: ["Argentina", "Mexico"],
};
const activity3 = {
    activityName: "Fly",
    difficulty: 4,
    duration: 180,
    season: ["Spring, Fall"],
    countries: ["Argentina", "Mexico"],
};
const activity4 = {
    activityName: "Skate",
    difficulty: 4,
    duration: 180,
    season: "Fall",
    countries: ["Argentina", "Mexico"],
};

describe("Activity routes", () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err);
        })
    );
    describe("POST /activities/add", () => {
        it("should be successful", () =>
            agent.post("/activities/add").send(activity1).expect(201));
        it("should be successful", () =>
            agent.post("/activities/add").send(activity2).expect(201));
        it("should fail", () =>
            agent.post("/activities/add").send(activity3).expect(400));
        it("should fail", () =>
            agent.post("/activities/add").send(activity4).expect(400));
    });
    describe("GET /activities", () => {
        it("should get 200", () => agent.get("/activities").expect(200));
    });
});
