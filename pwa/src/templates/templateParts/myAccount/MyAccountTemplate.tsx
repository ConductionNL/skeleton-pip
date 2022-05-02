import * as React from "react";
import { Heading2, Heading3, Link, Button, Paragraph } from "@gemeente-denhaag/components-react";
import { Table, TableBody, TableRow, TableCell } from "@gemeente-denhaag/table";
import { EditIcon } from "@gemeente-denhaag/icons";
import "./MyAccountTemplate.css";

export const MyAccountTemplate: React.FC = () => {
  return (
    <div className="MyAccountTemplate">
      <Heading2 className="MyAccountTemplate-heading2">My account</Heading2>
      <div className="MyAccountTemplate-spacing">
        <Heading3 className="MyAccountTemplate-heading3">Contact</Heading3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <b>Email address</b>
              </TableCell>
              <TableCell>test@gateway.local</TableCell>
              <TableCell>
                <Link>
                  <EditIcon /> Edit
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Phone number</b>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Link>
                  <EditIcon /> Edit
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="MyAccountTemplate-spacing">
        <Heading3 className="MyAccountTemplate-heading3">Notifications and updates</Heading3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <b>Case updates</b>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>News about my neighbourhood </b>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Tips</b>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="MyAccountTemplate-spacing">
        <Heading3 className="MyAccountTemplate-heading3">Personal details</Heading3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <b>First names</b>
              </TableCell>
              <TableCell>test@gateway.local</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Last name</b>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Gender</b>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Citizen service number</b>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Date of birth</b>
              </TableCell>
              <TableCell>10 April 2022</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Place of birth</b>
              </TableCell>
              <TableCell>localhost</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Nationality</b>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="MyAccountTemplate-spacing">
        <Heading3 className="MyAccountTemplate-heading3">Address</Heading3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <b>Street</b>
              </TableCell>
              <TableCell>Gagelplein 5</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Postal code and city</b>
              </TableCell>
              <TableCell>2563TT Den Haag</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="MyAccountTemplate-spacing">
        <Heading3 className="MyAccountTemplate-heading3">Number of inhabitants address</Heading3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <b>Number of people on your address</b>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          Is this not the number of people you expect? You can request an address investigation with your municipility.
          This investigation can also be cancelled.
        </p>
        <Button>Request research</Button>
      </div>
    </div>
  );
};
