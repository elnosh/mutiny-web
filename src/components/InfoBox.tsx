import { ParentComponent } from "solid-js";
import { ButtonLink, SmallHeader } from "~/components/layout"
import info from "~/assets/icons/info.svg"

export const InfoBox: ParentComponent<{ accent: "red" | "blue" | "green" | "white" }> = (props) => {
  return (
    <div class="grid grid-cols-[auto_minmax(0,_1fr)] rounded-xl p-4 gap-4 bg-neutral-950/50 border"
    classList={{"border-m-red": props.accent === "red", "border-m-blue": props.accent === "blue", "border-m-green": props.accent === "green", "border-white": props.accent === "white"}}>
      <div class="self-center">
        <img src={info} alt="info" class="w-8 h-8" />
      </div>
      <div class="flex items-center">
          <p class="text-base font-light">
            {props.children}
          </p>
      </div>
    </div>
  )
}
