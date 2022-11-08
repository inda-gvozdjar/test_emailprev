import React, { useEffect, useMemo, useState } from "react";
import emlformat from "eml-format";
import DOMPurify from "dompurify";

import { makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import emls from "./emls";
import "./styles.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

function CenteredTabs({ tab, setTab }) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={tab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {emls.map((_, ix) => (
          <Tab key={ix} label={ix + 1} value={ix} />
        ))}
      </Tabs>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);
  const [type, setType] = useState("text");
  const [parsed, setParsed] = useState(null);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    emlformat.read(emls[tab], function (error, data) {
      if (!error) {
        setParsed(data);
      }
    });
  }, [tab]);

  const cleanHTML = useMemo(
    () => DOMPurify.sanitize(parsed?.html, { FORBID_ATTR: ["href"] }),
    [parsed]
  );

  console.log(JSON.stringify(parsed, " ", 2));

  return (
    <div className="App">
      <FormControl component="fieldset">
        <FormLabel component="legend">Type</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={type}
          onChange={handleChange}
        >
          <FormControlLabel value="text" control={<Radio />} label="Text" />
          <FormControlLabel value="html" control={<Radio />} label="HTML" />
          <FormControlLabel
            value="sanitized"
            control={<Radio />}
            label="Sanitized HTML"
          />
          <FormControlLabel
            value="raw"
            control={<Radio />}
            label="Raw JSON Data"
          />
        </RadioGroup>
      </FormControl>
      <CenteredTabs tab={tab} setTab={setTab} />
      {type === "text" && parsed?.text}
      {type === "html" && (
        <div dangerouslySetInnerHTML={{ __html: parsed?.html }} />
      )}
      {type === "sanitized" && (
        <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
      )}
      {type === "raw" && <pre>{JSON.stringify(parsed, " ", 2)}</pre>}
    </div>
  );
}
