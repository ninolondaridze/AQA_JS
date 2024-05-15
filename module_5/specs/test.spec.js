const { sendRequest } = require('../helpers/api.helper')

describe("API test suite", () => {
  it("POST", async () => {
    const response = await sendRequest("posts",{
      title: "title1",
      body: "body1",
      userId: 1
    }, "post")
    expect(response.status).to.equal(201);
    expect(response.data.title).to.equal("title1");
    expect(response.data.body).to.equal("body1");
    expect(response.data.userId).to.equal(1);
  });

   it("GET all resources", async () => {
    const response = await sendRequest("posts")
  });

  it("GET a resource", async () => {
    const response = await sendRequest("posts/1")
  });

  it("GET filtered resources", async () => {
    const response = await sendRequest("posts?userId=1")
  });

  it("PUT", async () => {
    const response = await sendRequest("posts/1", {
      title: "title2",
      body: "body2",
      userId: 2
    }, "put")
    expect(response.data.title).to.equal("title2");
    expect(response.data.body).to.equal("body2");
    expect(response.data.userId).to.equal(2);
  });

  it("DELETE", async () => {
    const response = await sendRequest("posts/1", "delete")
    expect(response.status).to.equal(200);
  })
})