import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Link from '@material-ui/core/Link';

function ExperienceList () {
    return (
       
        <React.Fragment>
                <Typography variant="h5" component="h2" gutterBottom>
                Joint Secretary | CPC 
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    <Link href="https://www.facebook.com/DIU.CPC.PermanentCampus">
                       Daffodil International University- Full-time
                    </Link>
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                    Jan 2020 - Continue
                </Typography>
            <Divider />
                <Typography variant="h5" component="h2" gutterBottom>
                DIU | Campus Ambassador 
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    <Link href="https://www.bohubrihi.com/">
                    Bohubrihi Online Course -Part Time
                    </Link>
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                July 2020 - Continue
                </Typography>
            <Divider />
                <Typography variant="h5" component="h2" gutterBottom>
                    Teacher Assistant
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    <Link href="https://daffodilvarsity.edu.bd/">
                        Daffodil International University-DIU - Contract
                    </Link>
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                    Jan 2020 - Apr 2020 - 4 month
                </Typography>
            <Divider />
        </React.Fragment>
    );
};

export default ExperienceList;