import * as React from "react";
import * as styles from "./Messages.module.css";
import {
  Button,
  Card,
  FormField,
  FormFieldInput,
  FormFieldLabel,
  Link,
  Tab,
  TabContext,
  TabPanel,
  Tabs,
} from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { InputTextBox } from "../formFields/input";
import { useForm } from "react-hook-form";

interface MessagesProps {}

export const Messages: React.FC<MessagesProps> = ({}) => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [formError, setFormError] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleConsLog = async () => {
    return console.log("hoi");
  };

  const onSubmit = async () => {
    setLoading(true);
    setFormError("");
    handleConsLog()
      .catch((err) => {
        setFormError(err.message);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.tabst}>
        <TabContext value={value.toString()}>
          <Tabs
            value={value}
            onChange={(_, newValue: number) => {
              setValue(newValue);
            }}
            className={styles.tabs}
          >
            <Tab label={t("Unread messages")} value={0} />
            <Tab label={t("Read messages")} value={1} />
            <Tab label={t("Send messages")} value={2} />
          </Tabs>

          <TabPanel value="0">
            <div className={styles.grid}>Unread</div>
          </TabPanel>
          <TabPanel value="1">
            <div className={styles.grid}>Read</div>
          </TabPanel>
          <TabPanel value="2">
            <div className={styles.grid}>Send</div>
          </TabPanel>
        </TabContext>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <FormFieldInput>
            <FormFieldLabel>{t("Send Message")}</FormFieldLabel>
            <InputTextBox {...{ register, errors }} name="username" validation={{ required: true }} />
          </FormFieldInput>
        </FormField>
        <Button size="large" type="submit" disabled={loading}>
          {t("Send")}
        </Button>
      </form>
    </div>
  );
};
