import React from "react"
import Immutable from "seamless-immutable"

import Input from "./primitives/Input.js"
import Form from "./primitives/Form"
import FormButtonBar from "./primitives/FormButtonBar"
import Button from "./primitives/Button"

const Alert = props => {
  const valid = props.highPriceValid || props.lowPriceValid

  const onChange = props.onChange
    ? (prop, e) =>
        props.onChange(
          Immutable.merge(props.job, {
            [prop]: e.target.value
          })
        )
    : () => {}

  return (
    <Form>
      <Input
        id="highPrice"
        error={props.job.highPrice && !props.highPriceValid}
        label="Price rises above"
        type="number"
        placeholder="Enter price..."
        value={props.job.highPrice ? props.job.highPrice : ""}
        onChange={e => onChange("highPrice", e)}
        onFocus={e => props.onFocus("highPrice")}
      />
      <Input
        id="lowPrice"
        error={props.job.lowPrice && !props.lowPriceValid}
        label="Price drops below"
        type="number"
        placeholder="Enter price..."
        value={props.job.lowPrice ? props.job.lowPrice : ""}
        onChange={e => onChange("lowPrice", e)}
        onFocus={e => props.onFocus("lowPrice")}
      />
      <Input
        id="message"
        error={props.job.message && !props.messageValid}
        label="Message"
        type="text"
        placeholder="Enter message..."
        value={props.job.message}
        onChange={e => onChange("message", e)}
        flex="1"
        mr={0}
      />
      <FormButtonBar>
        <Button disabled={!valid} onClick={props.onSubmit}>
          Create Alert
        </Button>
      </FormButtonBar>
    </Form>
  )
}

export default Alert