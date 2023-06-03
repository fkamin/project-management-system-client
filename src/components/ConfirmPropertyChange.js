import { Box, Button, Dialog, DialogContent, Fade, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />
})

function ConfirmPropertyChange({ openDialog, closeDialog, changeFunction, propertyName, propertyId, propertyType, propertyLabel }) {

    const validateNewProperty = () => {
        console.log(propertyId)
    }

    return (
        <div>
            <Dialog
                open={openDialog}
                maxWidth="sm"
                scroll="body"
                onClose={closeDialog}
                TransitionComponent={Transition}>
                <DialogContent sx={{ px: 6, py: 6, position: "relative" }}>
                    <IconButton
                        disableRipple={true}
                        size="small"
                        onClick={closeDialog}
                        sx={{
                            position: "absolute",
                            right: "1rem",
                            top: "1rem",
                            "&:hover": {
                                color: "rgb(100, 100, 100)"
                            }
                        }}>
                        X
                    </IconButton>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    mb: 3,
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    flexDirection: "column"
                                }}>
                                <Typography variant="h6">
                                    Zmień {propertyName}
                                </Typography>
                                <Typography variant="h6">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id={propertyId}
                                        label={propertyLabel}
                                        type={propertyType}
                                        fullWidth
                                        variant="standard"
                                    />
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={14} sx={{ display: "flex", justifyContent: "flex-end", gap: "0.75em" }}>
                            <Button size="medium" variant="contained" onClick={closeDialog} sx={{
                                backgroundColor: "rgb(10, 160, 230)",
                                "&:hover": {
                                    backgroundColor: "rgb(10, 120, 170)"
                                }
                            }}>
                                Anuluj
                            </Button>
                            <Button size="medium" variant="contained" onClick={validateNewProperty} sx={{
                                backgroundColor: "rgb(200, 120, 10)",
                                "&:hover": {
                                    backgroundColor: "rgb(180, 80, 10)"
                                }
                            }}>
                                Zatwierdź
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ConfirmPropertyChange