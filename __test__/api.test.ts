import { getKeyboardImages } from "@/pages/api/api"

describe("getKeyboardImages", () => {
  it("returns data from the API", async () => {
    const result = await getKeyboardImages();
    expect(result).toBeDefined();
    // expect(Array.isArray(result.photos)).toBeTruthy();
  });
});
