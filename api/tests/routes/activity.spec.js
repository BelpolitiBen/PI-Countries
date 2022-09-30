/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const request = require("supertest");
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
    activityName: "Boulder=",
    difficulty: 4,
    duration: 180,
    season: ["Spring, Fall"],
    countries: ["Argentina", "Mexico"],
};
const activity4 = {
    activityName: "Fly",
    difficulty: 4,
    duration: 180,
    season: ["Spring, Fall"],
    countries: ["Argentina", "Mexico"],
};
const activity5 = {
    activityName: "Skate",
    difficulty: 4,
    duration: 180,
    season: "Fall",
    countries: ["Argentina", "Mexico"],
};
const activity6 = {
    activityName: "Ride",
    difficulty: 4,
    duration: 180,
    season: ["Fall", "Bruh"],
    countries: ["Argentina", "Mexico"],
};
const activity7 = {
    activityName: "Run",
    difficulty: 4,
    duration: 180,
    season: ["Fall"],
    countries: "Argentina",
};
const activity8 = {
    activityName: "Climb",
    difficulty: -4,
    duration: 180,
    season: ["Fall"],
    countries: "Argentina",
};
const activity9 = {
    activityName: "Parachute",
    difficulty: 6,
    duration: 180,
    season: ["Fall"],
    countries: "Argentina",
};
const activity10 = {
    activityName: "Rappel",
    difficulty: 6,
    duration: -180,
    season: ["Fall"],
    countries: "Argentina",
};
const activity11 = {
    activityName: "Ride Horses",
    difficulty: 6,
    duration: 1000000,
    season: ["Fall"],
    countries: "Argentina",
};

describe("Activity routes", () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err);
        })
    );
    beforeEach(() => Activity.sync({ force: true }));
    describe("POST /activities/add", () => {
        it("should be successful", (done) => {
            agent
                .post("/activities/add")
                .send(activity1)
                .expect(201)
                .then(done());
        });

        it("should be successful", (done) => {
            agent
                .post("/activities/add")
                .send(activity2)
                .expect(201)
                .then(done());
        });
        it("should fail as names can't contain special characters", (done) => {
            agent
                .post("/activities/add")
                .send(activity3)
                .expect(400)
                .then(done());
        });
        it("should fail as names can't be repeated", (done) => {
            agent
                .post("/activities/add")
                .send(activity4)
                .expect(400)
                .then(done());
        });
        it("should fail as seasons must be arrays", (done) => {
            agent
                .post("/activities/add")
                .send(activity5)
                .expect(400)
                .then(done());
        });
        it("should fail as seasons must include only seasons", (done) => {
            agent
                .post("/activities/add")
                .send(activity6)
                .expect(400)
                .then(done());
        });
        it("should fail as countries must be arrays", (done) => {
            agent
                .post("/activities/add")
                .send(activity7)
                .expect(400)
                .then(done());
        });
        it("should fail as difficulty must be a positive number", (done) => {
            agent
                .post("/activities/add")
                .send(activity8)
                .expect(400)
                .then(done());
        });
        it("should fail as difficulty must be between 1 and 5", (done) => {
            agent
                .post("/activities/add")
                .send(activity9)
                .expect(400)
                .then(done());
        });
        it("should fail as duration must be a positive number", (done) => {
            agent
                .post("/activities/add")
                .send(activity10)
                .expect(400)
                .then(done());
        });
        it("should fail as duration must be a less than 525600 (a year)", (done) => {
            agent
                .post("/activities/add")
                .send(activity11)
                .expect(400)
                .then(done());
        });
    });
    describe("GET /activities", () => {
        before(
            () => Activity.sync({ force: true }),
            agent.post("/activities/add").send(activity1),
            agent.post("/activities/add").send(activity2)
        );
        it("should get 200", (done) => {
            agent.get("/activities").expect(200).then(done());
        });
        it("should be two", (done) => {
            agent.get("/activities").then((err, res) => {
                expect(res.status).to.eq(200);
                expect(res.body).to.have.lengthOf(2);
                done();
            });
        });
    });
});
