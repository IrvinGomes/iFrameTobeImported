import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useRef, useState } from 'react';

export function IframePage(){
    const targetRef = useRef(null);

    // const [height, setHeight] = useState(500);
    useEffect(()=>{
        handleCustomScrollHeightChange()
    },[])

    const handleCustomScrollHeightChange = ()=>{
        const size = document.body.scrollHeight
        window.parent.postMessage({type: 'resize', payload: { size }}, document.referrer);
    }

	return (
		<main ref={targetRef}>
			<div className='iframe'>
				<h2>Hello from the Iframe Page</h2>
				<p>This content can be embedded in an iframe.</p>
                <div>
                    <Accordion onChange={()=>{handleCustomScrollHeightChange()}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                             <Typography>Accordion 1</Typography>   
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disabled>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography>Disabled Accordion</Typography>
                        </AccordionSummary>
                    </Accordion>
                </div>
			</div>
		</main>
	);
};

export default IframePage;
