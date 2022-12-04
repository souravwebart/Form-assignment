import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, Button, FilledInput, TextField, Typography } from "@mui/material";
import Mapcomponent from "./map";
import { useForm } from "react-hook-form";
import axios from "axios";

interface Props {
  data: any;
}

export default function Form(Props: Props) {
  const { data } = Props;
  console.log("Mydata", data);
  const [values, setValues] = React.useState({
    name: "",
    address: "",
    title: "",
    body: "",
  });

  console.log("myname", values);

  const handleChange = (name: string) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const error = values.name == "";
  const error1 = values.address == "";

  const handleData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("api/post/post-review", {
        body: {
          title: values.title,
          body: values.body,
          userId: values.name,
        },
      })
      .then((response) => {
        console.log("myresponse", response);
        alert("Form submitted Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      id="formSectionzone"
      sx={{
        backgroundColor: "#0db6ff26",
        position: "relative",
        marginBottom: { sx: "200px", md: "0px", lg: "0px", xl: "0px" },
      }}
    >
      <Box
        sx={{
          padding: { xs: "85px 0px 24px 16px", sm: "85px 40px 60px 40px" },
          borderRadius: "20px",
          marginLeft: { xs: "0px", sm: "40px", md: "40px", lg: "40px" },
          marginRight: { xs: "15px", sm: "40px", md: "40px", lg: "40px" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sx: "1fr",
              md: "1fr",
              lg: "1fr",
              xl: "1fr",
            },
          }}
        >
          <Box
            sx={{
              background: "#fff",
              borderRadius: "15px",
              position: "relative",
              width: { sx: "100%", md: "100%", lg: "582px", xl: "582px" },
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: "0px",
                left: "0px",
                width: "100%",
                height: "401px",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                margin: "auto",
                justifyContent: "center",
                padding: {
                  xs: "20px 15px",
                  md: "42px 32px",
                  lg: "42px 32px",
                  xl: "42px 32px",
                },
              }}
            >
              <form id="contact-form">
                <Box
                  sx={{
                    display: {
                      xs: "relative",
                      md: "flex",
                      lg: "flex",
                      xl: "flex",
                    },
                    marginTop: "16px",
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabel
                    htmlFor="component-filled"
                    sx={{
                      fontSize: "18px ",
                      fontWeight: "500 ",
                      fontStretch: "normal ",
                      fontStyle: "normal ",
                      lineHeight: 1.5,
                      letterSpacing: "normal ",
                      textAlign: "left ",
                      color: "#000d4c ",
                      fontFamily: "Poppins",
                    }}
                  >
                    User Name
                  </InputLabel>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel
                      id="demo-simple-select-standard-label"
                      htmlFor="component-filled"
                      sx={{
                        fontSize: "18px ",
                        fontWeight: "500 ",
                        fontStretch: "normal ",
                        fontStyle: "normal ",
                        lineHeight: 1.5,
                        letterSpacing: "normal ",
                        textAlign: "left ",
                        color: "#000d4c ",
                        fontFamily: "Poppins",
                      }}
                    >
                      User Name
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={values.name}
                      onChange={handleChange("name")}
                      label="name"
                      required
                    >
                      {data &&
                        data.map((item: any, idx: number) => {
                          return (
                            item.name && (
                              <MenuItem value={item.id} key={idx}>
                                {item.name}
                              </MenuItem>
                            )
                          );
                        })}
                    </Select>
                    <Typography
                      sx={{
                        fontSize: "18px ",
                        fontWeight: "500 ",
                        fontStretch: "normal ",
                        fontStyle: "normal ",
                        lineHeight: 1.5,
                        letterSpacing: "normal ",
                        textAlign: "left ",
                        color: "red",
                        fontFamily: "Poppins",
                      }}
                    >
                      {error ? "Please select a user" : ""}
                    </Typography>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "relative",
                      md: "flex",
                      lg: "flex",
                      xl: "flex",
                    },
                    marginTop: "16px",
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabel
                    htmlFor="component-filled"
                    sx={{
                      fontSize: "18px ",
                      fontWeight: "500 ",
                      fontStretch: "normal ",
                      fontStyle: "normal ",
                      lineHeight: 1.5,
                      letterSpacing: "normal ",
                      textAlign: "left ",
                      color: "#000d4c ",
                      fontFamily: "Poppins",
                    }}
                  >
                    Address
                  </InputLabel>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel
                      id="demo-simple-select-standard-label"
                      htmlFor="component-filled"
                      sx={{
                        fontSize: "18px ",
                        fontWeight: "500 ",
                        fontStretch: "normal ",
                        fontStyle: "normal ",
                        lineHeight: 1.5,
                        letterSpacing: "normal ",
                        textAlign: "left ",
                        color: "#000d4c ",
                        fontFamily: "Poppins",
                      }}
                    >
                      Address
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={values.address}
                      onChange={handleChange("address")}
                      label="address"
                      required
                    >
                      {data &&
                        data.map((item: any, idx: number) => {
                          return (
                            <MenuItem value={item.id} key={idx}>
                              {item.address.city +
                                "," +
                                item.address.street +
                                "-" +
                                item.address.zipcode}
                            </MenuItem>
                          );
                        })}
                    </Select>
                    <Typography
                      sx={{
                        fontSize: "18px ",
                        fontWeight: "500 ",
                        fontStretch: "normal ",
                        fontStyle: "normal ",
                        lineHeight: 1.5,
                        letterSpacing: "normal ",
                        textAlign: "left ",
                        color: "red",
                        fontFamily: "Poppins",
                      }}
                    >
                      {error1 ? "Please select a Address" : ""}
                    </Typography>
                  </FormControl>
                </Box>
                <Mapcomponent />
                <Box
                  sx={{
                    display: {
                      xs: "relative",
                      md: "flex",
                      lg: "flex",
                      xl: "flex",
                    },
                    marginTop: "16px",
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabel
                    htmlFor="component-filled"
                    sx={{
                      fontSize: "18px ",
                      fontWeight: "500 ",
                      fontStretch: "normal ",
                      fontStyle: "normal ",
                      lineHeight: 1.5,
                      letterSpacing: "normal ",
                      textAlign: "left ",
                      color: "#000d4c ",
                      fontFamily: "Poppins",
                    }}
                  >
                    Title
                  </InputLabel>
                  <TextField
                    required
                    id="standard-basic"
                    label="Title"
                    name="title"
                    value={values.title}
                    onChange={handleChange("title")}
                    sx={{ m: 1, minWidth: 300 }}
                    variant="standard"
                  />
                </Box>

                <Box
                  sx={{
                    display: {
                      xs: "relative",
                      md: "flex",
                      lg: "flex",
                      xl: "flex",
                    },
                    marginTop: "16px",
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabel
                    htmlFor="component-filled"
                    sx={{
                      fontSize: "18px ",
                      fontWeight: "500 ",
                      fontStretch: "normal ",
                      fontStyle: "normal ",
                      lineHeight: 1.5,
                      letterSpacing: "normal ",
                      textAlign: "left ",
                      color: "#000d4c ",
                      fontFamily: "Poppins",
                    }}
                  >
                    Body
                  </InputLabel>
                  <TextField
                    id="standard-multiline-static"
                    label="Body"
                    value={values.body}
                    name="body"
                    onChange={handleChange("body")}
                    multiline
                    required
                    variant="standard"
                    sx={{ m: 1, minWidth: 300 }}
                  />
                </Box>
                <Box
                  sx={{
                    textAlign: { xs: "left", md: "end", lg: "end", xl: "end" },
                    marginTop: "40px",
                  }}
                >
                  <Button
                    sx={{
                      padding: "8px 40px",
                      borderRadius: "30px",
                      backgroundColor: "#ff7623",
                      boxShadow: "0 6px 48px 0 rgba(28, 28, 28, 0.08);",
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleData}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
