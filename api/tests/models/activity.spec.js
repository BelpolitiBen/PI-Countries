const { Activity, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Activity model", () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err);
        })
    );
    describe("Validators", () => {
        beforeEach(() => Activity.sync({ force: true }));

        it("should throw an error if activityName is null", async () => {
            let res = null;
            try {
                await Activity.create({
                    difficulty: 5,
                    duration: 130,
                    seasons: ["Summer"],
                });
            } catch (error) {
                res = error;
            }
            expect(res.message).to.equal(
                "notNull Violation: activity.activityName cannot be null"
            );
        });
        it("should work when its a valid activityName", async () => {
            await Activity.create({
                activityName: "Rafting",
                difficulty: 5,
                duration: 130,
                seasons: ["Summer"],
            });
            const res = await Activity.findAll();
            expect(res[0]).to.have.property("activityName", "Rafting");
        });
        it("should throw an error if difficulty is null", async () => {
            let res = null;
            try {
                Activity.create({
                    activityName: "Rafting",
                    duration: 130,
                    seasons: ["Summer"],
                });
            } catch (error) {
                console.log(error);
                res = error;
            }
            expect(res.message).to.equal(
                "notNull Violation: activity.activityName cannot be null"
            );
        });
        it("should throw an error if difficulty is not an integer", async () => {
            let res = null;
            try {
                await Activity.create({
                    activityName: "Rafting",
                    difficulty: [5],
                    duration: 130,
                    seasons: ["Summer"],
                });
            } catch (error) {
                res = error;
            }
            expect(res.message).to.equal(
                "notNull Violation: activity.activityName cannot be null"
            );
        });
        it("should work when its a valid difficulty", async () => {
            await Activity.create({
                activityName: "Rafting",
                difficulty: 5,
                duration: 130,
                seasons: ["Summer"],
            });
            const res = await Activity.findAll();
            expect(res[0]).to.have.property("activityName", "Rafting");
        });
        it("should throw an error if duration is null", async () => {
            let res = null;
            try {
                await Activity.create({
                    activityName: "Rafting",
                    difficulty: 5,
                    seasons: ["Summer"],
                });
            } catch (error) {
                res = error;
            }
            expect(res.message).to.equal(
                "notNull Violation: activity.duration cannot be null"
            );
        });
        it("should throw an error if duration is not an integer", async () => {
            let res = null;
            try {
                await Activity.create({
                    activityName: "Rafting",
                    difficulty: 5,
                    duration: 855.5,
                    seasons: ["Summer"],
                });
            } catch (error) {
                res = error;
            }
            expect(res.message).to.equal(
                "la sintaxis de entrada no es válida para tipo integer: «855.5»"
            );
        });
        it("should work when its a valid duration", async () => {
            await Activity.create({
                activityName: "Rafting",
                difficulty: 5,
                duration: 130,
                seasons: ["Summer"],
            });
            const res = await Activity.findAll();
            expect(res[0]).to.have.property("activityName", "Rafting");
        });
        it("should throw an error if seasons is null", async () => {
            let res = null;
            try {
                await Activity.create({
                    activityName: "Rafting",
                    difficulty: 5,
                    duration: 130,
                });
            } catch (error) {
                res = error;
            }
            expect(res.message).to.equal(
                "notNull Violation: activity.seasons cannot be null"
            );
        });
        it("should throw an error if seasons is not an array", async () => {
            let res = null;
            try {
                await Activity.create({
                    activityName: "Rafting",
                    difficulty: 5,
                    duration: 130,
                    seasons: "Summer",
                });
            } catch (error) {
                res = error;
            }
            expect(res.message).to.equal("values.map is not a function");
        });
        it("should work when its a valid seasons", async () => {
            await Activity.create({
                activityName: "Rafting",
                difficulty: 5,
                duration: 130,
                seasons: ["Summer"],
            });
            const res = await Activity.findAll();
            expect(res[0]).to.have.property("activityName", "Rafting");
        });
    });
});
