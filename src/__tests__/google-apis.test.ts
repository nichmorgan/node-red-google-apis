import testHelper, { TestFlowsItem } from "node-red-node-test-helper";
import GoogleApisNode from "../nodes/google-apis/google-apis";
import { GoogleApisNodeDef } from "../nodes/google-apis/modules/types";

type FlowsItem = TestFlowsItem<GoogleApisNodeDef>;
type Flows = Array<FlowsItem>;

describe("google-apis node", () => {
    beforeEach((done) => {
        testHelper.startServer(done);
    });

    afterEach((done) => {
        testHelper.unload().then(() => {
            testHelper.stopServer(done);
        });
    });

    it("should be loaded", (done) => {
        const flows: Flows = [
            {
                id: "n1",
                type: "google-apis",
                name: "google-apis"
            }
        ];
        testHelper.load(GoogleApisNode, flows, () => {
            const n1 = testHelper.getNode("n1");
            expect(n1).toBeTruthy();
            expect(n1.name).toEqual("google-apis");
            done();
        });
    });

    // describe("Google Authenticate", () => {
    //     let flows: Flows;
    //     beforeEach(() => {
    //         flows = [
    //             {
    //                 id: "n1",
    //                 type: "google-apis",
    //                 name: "google-apis",
    //                 wires: [["n2"]]
    //             },
    //             { id: "n2", type: "helper" }
    //         ];
    //     });

    //     it("should login into google", (done) => {
    //         testHelper.load(GoogleApisNode, flows, () => {
    //             const n2 = testHelper.getNode("n2");
    //             const n1 = testHelper.getNode("n1");
    //             n2.on("input", (msg: unknown) => {
    //                 expect(msg).toBeTruthy();
    //             });
    //             n1.receive({payload: })
    //         })
    //     })
    // });
});
