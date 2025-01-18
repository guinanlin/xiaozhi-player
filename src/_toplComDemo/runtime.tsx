export default function ({ env, data, inputs, outputs }) {
  if (env.runtime) {
    inputs["onTrigger"]((val) => {
      outputs["onComplete"](1);
    });
  }
}
