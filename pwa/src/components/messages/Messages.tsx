import * as React from "react";
import * as styles from "./Messages.module.css";
import {
  Alert,
  Button,
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
import { InputTextArea } from "../formFields/input";
import { useForm } from "react-hook-form";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import { useEndpoint } from "../../hooks/endpoint";
import { useQueryClient } from "react-query";


interface MessagesProps {
  messageId: string;
}

export const Messages: React.FC<MessagesProps> = ({messageId}) => {
  const { t } = useTranslation();
  const [tab, setTab] = React.useState(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [formError, setFormError] = React.useState<string>("");

  const queryClient = useQueryClient();

  const _useEndpoint = useEndpoint(queryClient);
  const getEndpoint = _useEndpoint.getOne(messageId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
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

  const handleSetFormValues = (message: any): void => {
    const basicFields: string[] = ["name", "path", "description", "applications"];
    basicFields.forEach((field) => setValue(field, message[field]));
  };

  React.useEffect(() => {
    if (getEndpoint.isSuccess) {
      handleSetFormValues(getEndpoint.data);
    }
  }, [getEndpoint.isSuccess]);

  return (
    <div className={styles.container}>
      <div>
        <TabContext value={tab.toString()}>
          <Tabs
            value={tab}
            onChange={(_, newValue: number) => {
              setTab(newValue);
            }}
            className={styles.tabs}
          >
            <Tab label={t("Unread messages")} value={0} />
            <Tab label={t("Read messages")} value={1} />
            <Tab label={t("Send messages")} value={2} />
          </Tabs>

          <TabPanel value="0">
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeader scope="row">Unread Message1</TableHeader>
                  <TableCell>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ipsam a, aut saepe assumenda
                    explicabo harum amet provident ducimus minima doloremque magnam maxime quas! Debitis repellat
                    laborum dolorem illo vitae.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader scope="row">Unread Message2</TableHeader>
                  <TableCell>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et soluta est quia possimus a excepturi,
                    cum quos quaerat corrupti debitis vel numquam, at, facilis quo ea in explicabo! A, blanditiis?
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel value="1">
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeader scope="row">Read Message1</TableHeader>
                  <TableCell>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ipsam a, aut saepe assumenda
                    explicabo harum amet provident ducimus minima doloremque magnam maxime quas! Debitis repellat
                    laborum dolorem illo vitae.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader scope="row">Read Message2</TableHeader>
                  <TableCell>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et soluta est quia possimus a excepturi,
                    cum quos quaerat corrupti debitis vel numquam, at, facilis quo ea in explicabo! A, blanditiis?
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel value="2">
            <div className={styles.grid}>Send</div>
          </TabPanel>
        </TabContext>
      </div>
      <form /*className={styles.form}*/ onSubmit={handleSubmit(onSubmit)}>
        {formError && <Alert text={formError} title={t("Oops, something went wrong")} variant="error" />}

        <FormField>
          <FormFieldInput>
            <FormFieldLabel>{t("Send Message")}</FormFieldLabel>
            <InputTextArea {...{ register, errors }} name="message" validation={{ required: true }} />
          </FormFieldInput>
        </FormField>
        <Button size="large" type="submit" disabled={loading}>
          {t("Send")}
        </Button>
      </form>
    </div>
  );
};
