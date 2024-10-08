// web/api/status.ts
import { Router, Request, Response } from "express";
import { CustomClient } from "../../../types";

const createStatusRouter = (client: CustomClient) => {
  const router = Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Close Window</title>
      </head>
      <body>
        <script>
          window.onload = function() {
            window.close();
          };
        </script>
        <p>Attempting to close the window...</p>
      </body>
      </html>
    `);

      // res.json({
      //   status: "API is running",
      //   clientInfo: client.user?.username,
      //   userData: client.apiUser,
      // });
    } catch (error) {
      console.error("api error:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving status" });
    }
  });

  return router;
};

export default createStatusRouter;
