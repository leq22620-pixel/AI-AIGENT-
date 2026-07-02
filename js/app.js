import kernel from "./core/kernel.js";
import { send } from "./pages/assistant.js";

window.addEventListener("load", async () => {

    await kernel.boot();

    console.log(kernel.info());

    document
        .getElementById("send")
        .addEventListener("click", send);

    document
        .getElementById("prompt")
        .addEventListener("keydown", (e) => {

            if (e.key === "Enter") {
                send();
            }

        });

});