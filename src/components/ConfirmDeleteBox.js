import { Box, Button, Dialog, DialogContent, Fade, Grid, IconButton, Typography } from "@mui/material";
import React, { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />
})

function ConfirmDeleteBox({ openDialog, closeDialog, deleteFunction }) {
    return (
        <div>
            <Dialog
                open={openDialog}
                maxWidth="sm"
                scroll="body"
                onClose={closeDialog}
                onBackdropClick={closeDialog}
                TransitionComponent={Transition}>
                <DialogContent sx={{ px: 6, py: 6, position: "relative"}}>
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
                            } }}>
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
                                <Typography variant="h5">
                                    Czy na pewno chcesz usunąć konto?
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
                            <Button size="medium" variant="contained" onClick={deleteFunction} sx={{
                                backgroundColor: "rgb(230, 40, 10)",
                                "&:hover": {
                                    backgroundColor: "rgb(150, 40, 10)"
                                }
                            }}>
                                Usuń
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ConfirmDeleteBox