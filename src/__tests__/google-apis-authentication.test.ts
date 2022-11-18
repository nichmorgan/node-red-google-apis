import testHelper, { TestFlowsItem } from "node-red-node-test-helper";
import GoogleApisAuthenticationNode from "../nodes/google-apis-authentication/google-apis-authentication";
import { GoogleApisAuthenticationNodeDef } from "../nodes/google-apis-authentication/modules/types";

type FlowsItem = TestFlowsItem<GoogleApisAuthenticationNodeDef>;
type Flows = Array<FlowsItem>;

describe("google-apis-authentication node", () => {
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
                type: "google-apis-authentication",
                name: "google-apis-authentication"
            }
        ];
        testHelper.load(GoogleApisAuthenticationNode, flows, () => {
            const n1 = testHelper.getNode("n1");
            expect(n1).toBeTruthy();
            expect(n1.name).toEqual("google-apis-authentication");
            done();
        });
    });

    // describe("Google Authenticate", () => {
    //     let flows: Flows;
    //     beforeEach(() => {
    //         flows = [
    //             {
    //                 id: "n1",
    //                 type: "google-apis-authentication",
    //                 name: "google-apis-authentication",
    //                 wires: [["n2"]]
    //             },
    //             { id: "n2", type: "helper" }
    //         ];
    //     });

    //     it("should login into google", (done) => {
    //         testHelper.load(GoogleApisAuthenticationNode, flows, () => {
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
