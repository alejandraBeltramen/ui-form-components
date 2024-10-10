import { Container, Stack, Typography } from "@mui/material"
import { Form } from "react-final-form";
import { FormSubtitle } from "../components/layout/FormSubtitle";
import { FormRow } from "../components/layout/FormRow";
import TextInput from "../components/formElements/TextInput";
import { FormGroupContainer } from "../components/layout/FormGroupContainer";

const FormsDemo = () => {
  const handleSubmit = () => {
    console.log('Submitted')
  }

  return (
    <Container maxWidth="md">
      <Stack spacing={2} m={3}>
        <Typography variant="h4">Forms Demo Page</Typography>
        <Form
          initialValues={{
          
          }}
          onSubmit={handleSubmit}
          validate={() => {
            console.log("Form-level validation");
            return undefined;
          }}
          render={({ handleSubmit, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <FormSubtitle>Text Inputs</FormSubtitle>
                <FormGroupContainer>
                  <FormRow>
                    <TextInput
                      fieldName="text-input"
                      label="Demo Text Input"
                      validate={(value) => {
                        if (value?.trim() === "")
                          return "Field required";
                      }}
                      required
                    />
                  </FormRow>
                </FormGroupContainer>

                <FormSubtitle>Form Values Preview</FormSubtitle>
                <pre>{JSON.stringify(values, null, 2)}</pre>
                <FormSubtitle>Form Errors Preview</FormSubtitle>
                <pre>{JSON.stringify(errors, null, 2)}</pre>
              </Stack>
            </form>
          )}
        />
      </Stack>
    </Container>
  )
}

export default FormsDemo