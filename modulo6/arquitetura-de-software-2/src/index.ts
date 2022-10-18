import {app} from "./app"
import { taskRouter } from "./routes/taskRouter"
import { MovieController } from "./controller/MovieController"
import { movieRouter } from "./routes/movieRouter"
import {userRouter} from "./routes/userRouter"

app.use("/user", userRouter)

app.use("/movie", movieRouter)

movieRouter.post("/create", MovieController.create)

app.use("/task", taskRouter)