import React, { useCallback, useState } from "react"
import { Helmet } from "react-helmet"
import Latex from "react-latex"

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
// import "../../../static/styles/katex.min.css"

// import "../../../static/js/katex.js"
export default ()=> {
    return <>
        {/* <Helmet>    
            <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" rel="stylesheet"></script>
        </Helmet> */}
        {/* <BlockMath
            math={'\\int_0^\\infty x^2 dx \\inta'}
            errorColor={'#cc0000'}
        /> */}
        <Latex  displayMode={true}>
            $$f(x) =  - 0.0973 \times cos(x)  + 0.0407 \times cos(x)  + 0.0466 \times cos(x)  - 0.061 \times cos(x)  + 0.0574 \times cos(x)  - 0.0196 \times cos(x)  - 0.0128 \times cos(x)  - 0.0263 \times cos(x)  - 0.0156 \times cos(x)  + 0.0139 \times cos(x)  + 0.0046 \times cos(x)  - 0.0006 \times cos(x)  - 0.0038 \times cos(x)  + 0.0018 \times cos(x)  - 0.0008 \times cos(x)  + 0.0058 \times cos(x)  - 0.0047 \times cos(x)  - 0.0064 \times cos(x)  - 0.0054 \times cos(x)  + 0.0069 \times cos(x)  + 0.0024 \times cos(x)  + 0.0036 \times cos(x)  - 0.0036 \times cos(x)  + 0.0008 \times cos(x)  - 0.004 \times cos(x)  + 0.0026 \times cos(x)  - 0.0011 \times cos(x)  + 0.0009 \times cos(x)  - 0.0029 \times cos(x)  + 0.0002 \times cos(x)  + 0.0 \times cos(x)  + 0.0027 \times cos(x)  - 0.0006 \times cos(x)  + 0.0005 \times cos(x)  - 0.0019 \times cos(x)  - 0.0002 \times cos(x)  - 0.0016 \times cos(x)  + 0.0011 \times cos(x)  - 0.0012 \times cos(x)  + 0.0002 \times cos(x)  + 0.0011 \times cos(x)  + 0.0013 \times cos(x)  - 0.0011 \times cos(x)  - 0.0007 \times cos(x)  + 0.0014 \times cos(x)  + 0.0007 \times cos(x)  + 0.0021 \times cos(x)  - 0.0001 \times cos(x)  + 0.0011 \times cos(x)  - 0.0013 \times cos(x)  - 0.0017 \times cos(x)  - 0.0004 \times cos(x)  + 0.0003 \times cos(x)  - 0.0006 \times cos(x)  + 0.0006 \times cos(x)  - 0.0015 \times cos(x)  + 0.0003 \times cos(x)  - 0.0004 \times cos(x)  + 0.0004 \times cos(x)  + 0.0002 \times cos(x)  - 0.0 \times cos(x)  - 0.001 \times cos(x)  - 0.0 \times cos(x)  + 0.0006 \times cos(x)  - 0.0003 \times cos(x)  - 0.0002 \times cos(x)  - 0.0008 \times cos(x)  + 0.0009 \times cos(x)  - 0.0002 \times cos(x)  - 0.0007 \times cos(x)  + 0.0001 \times cos(x)  - 0.0007 \times cos(x)  + 0.0008 \times cos(x)  - 0.0001 \times cos(x)  + 0.0003 \times cos(x)  + 0.0004 \times cos(x)  - 0.0008 \times cos(x)  - 0.0003 \times cos(x)  - 0.0007 \times cos(x)  + 0.0001 \times cos(x)  + 0.0006 \times cos(x)  - 0.0001 \times cos(x)  - 0.0004 \times cos(x)  - 0.0003 \times cos(x)  + 0.0007 \times cos(x)  - 0.0002 \times cos(x)  - 0.0005 \times cos(x)  - 0.0004 \times cos(x)  + 0.0 \times cos(x)  + 0.0001 \times cos(x)  + 0.0001 \times cos(x)  + 0.0 \times cos(x)  - 0.0006 \times cos(x)  + 0.0 \times cos(x)  + 0.0003 \times cos(x)  - 0.0004 \times cos(x)  + 0.0001 \times cos(x)  - 0.0012 \times cos(x)  + 0.0001 \times cos(x)  - 0.0002 \times cos(x)
               \\ \ \ \ \ \ \ \ \ + i(  - 0.1526 \times sin(x)  - 0.1228 \times sin(x)  + 0.0465 \times sin(x)  - 0.1063 \times sin(x)  - 0.0602 \times sin(x)  + 0.0129 \times sin(x)  + 0.0043 \times sin(x)  + 0.0476 \times sin(x)  + 0.0085 \times sin(x)  + 0.0162 \times sin(x)  + 0.0007 \times sin(x)  - 0.0086 \times sin(x)  - 0.0114 \times sin(x)  - 0.0033 \times sin(x)  - 0.0019 \times sin(x)  + 0.0068 \times sin(x)  + 0.0024 \times sin(x)  + 0.002 \times sin(x)  - 0.009 \times sin(x)  - 0.002 \times sin(x)  + 0.009 \times sin(x)  + 0.0028 \times sin(x)  + 0.0074 \times sin(x)  + 0.0021 \times sin(x)  - 0.0003 \times sin(x)  - 0.0023 \times sin(x)  - 0.0019 \times sin(x)  + 0.0022 \times sin(x)  + 0.0021 \times sin(x)  + 0.0001 \times sin(x)  + 0.0016 \times sin(x)  - 0.0016 \times sin(x)  + 0.0022 \times sin(x)  - 0.0009 \times sin(x)  + 0.0036 \times sin(x)  + 0.0004 \times sin(x)  + 0.0011 \times sin(x)  + 0.0008 \times sin(x)  + 0.0014 \times sin(x)  - 0.0006 \times sin(x)  + 0.0015 \times sin(x)  + 0.0003 \times sin(x)  + 0.0007 \times sin(x)  + 0.0014 \times sin(x)  - 0.0002 \times sin(x)  - 0.0019 \times sin(x)  + 0.0013 \times sin(x)  + 0.0003 \times sin(x)  + 0.0008 \times sin(x)  - 0.0008 \times sin(x)  + 0.0003 \times sin(x)  - 0.0005 \times sin(x)  - 0.0002 \times sin(x)  + 0.0012 \times sin(x)  - 0.0002 \times sin(x)  + 0.0 \times sin(x)  + 0.0002 \times sin(x)  + 0.0001 \times sin(x)  + 0.0007 \times sin(x)  + 0.0005 \times sin(x)  - 0.0006 \times sin(x)  + 0.0006 \times sin(x)  + 0.0017 \times sin(x)  + 0.0007 \times sin(x)  + 0.0004 \times sin(x)  - 0.0006 \times sin(x)  - 0.0005 \times sin(x)  + 0.0013 \times sin(x)  - 0.0002 \times sin(x)  + 0.0002 \times sin(x)  + 0.0004 \times sin(x)  - 0.0003 \times sin(x)  - 0.0003 \times sin(x)  + 0.0002 \times sin(x)  + 0.0005 \times sin(x)  - 0.0004 \times sin(x)  + 0.0004 \times sin(x)  - 0.0001 \times sin(x)  + 0.0004 \times sin(x)  + 0.001 \times sin(x)  - 0.0009 \times sin(x)  + 0.0001 \times sin(x)  - 0.0001 \times sin(x)  + 0.0003 \times sin(x)  + 0.0005 \times sin(x)  - 0.0001 \times sin(x)  - 0.0005 \times sin(x)  + 0.0002 \times sin(x)  + 0.0006 \times sin(x)  - 0.0003 \times sin(x)  + 0.0008 \times sin(x)  - 0.0004 \times sin(x)  - 0.0007 \times sin(x)  + 0.0006 \times sin(x)  + 0.0002 \times sin(x)  - 0.0001 \times sin(x)  - 0.0002 \times sin(x)  + 0.0001 \times sin(x)  + 0.0 \times sin(x)  + 0.0004 \times sin(x) )
            $$
       
            $$f(y) =  0.0452 \times cos(y)  + 0.0594 \times cos(y)  - 0.0178 \times cos(y)  + 0.0087 \times cos(y)  + 0.024 \times cos(y)  - 0.0145 \times cos(y)  - 0.007 \times cos(y)  - 0.0315 \times cos(y)  - 0.0028 \times cos(y)  - 0.0196 \times cos(y)  - 0.0051 \times cos(y)  + 0.0083 \times cos(y)  + 0.0078 \times cos(y)  + 0.0024 \times cos(y)  + 0.0039 \times cos(y)  - 0.0076 \times cos(y)  + 0.0025 \times cos(y)  - 0.0029 \times cos(y)  - 0.0017 \times cos(y)  - 0.0032 \times cos(y)  + 0.0077 \times cos(y)  - 0.0021 \times cos(y)  - 0.0013 \times cos(y)  + 0.0005 \times cos(y)  + 0.001 \times cos(y)  + 0.0008 \times cos(y)  + 0.0001 \times cos(y)  - 0.0008 \times cos(y)  + 0.0001 \times cos(y)  + 0.0009 \times cos(y)  - 0.0015 \times cos(y)  + 0.0012 \times cos(y)  - 0.0009 \times cos(y)  + 0.0015 \times cos(y)  - 0.0014 \times cos(y)  + 0.0011 \times cos(y)  - 0.0006 \times cos(y)  + 0.0 \times cos(y)  + 0.0007 \times cos(y)  + 0.0012 \times cos(y)  + 0.0 \times cos(y)  + 0.001 \times cos(y)  - 0.0015 \times cos(y)  + 0.0002 \times cos(y)  - 0.0006 \times cos(y)  - 0.0005 \times cos(y)  + 0.0001 \times cos(y)  + 0.0004 \times cos(y)  - 0.0 \times cos(y)  + 0.0008 \times cos(y)  - 0.0004 \times cos(y)  - 0.0002 \times cos(y)  + 0.0002 \times cos(y)  + 0.0001 \times cos(y)  - 0.0003 \times cos(y)  - 0.0001 \times cos(y)  + 0.0001 \times cos(y)  + 0.0001 \times cos(y)  - 0.0001 \times cos(y)  - 0.0 \times cos(y)  + 0.0004 \times cos(y)  + 0.0001 \times cos(y)  - 0.0002 \times cos(y)  - 0.0001 \times cos(y)  + 0.0002 \times cos(y)  - 0.0002 \times cos(y)  + 0.0001 \times cos(y)  - 0.0002 \times cos(y)  - 0.0001 \times cos(y)  + 0.0003 \times cos(y)  - 0.0002 \times cos(y)  + 0.0003 \times cos(y)  - 0.0002 \times cos(y)  + 0.0002 \times cos(y)  - 0.0 \times cos(y)  - 0.0001 \times cos(y)  + 0.0001 \times cos(y)  - 0.0001 \times cos(y)  - 0.0 \times cos(y)  + 0.0003 \times cos(y)  + 0.0 \times cos(y)  + 0.0 \times cos(y)  - 0.0001 \times cos(y)  - 0.0 \times cos(y)  - 0.0004 \times cos(y)  + 0.0001 \times cos(y)  + 0.0002 \times cos(y)  - 0.0001 \times cos(y)  - 0.0001 \times cos(y)  + 0.0002 \times cos(y)  + 0.0005 \times cos(y)  + 0.0 \times cos(y)  - 0.0 \times cos(y)  - 0.0002 \times cos(y)  - 0.0001 \times cos(y)  + 0.0001 \times cos(y)  - 0.0002 \times cos(y)  - 0.0001 \times cos(y)  - 0.0002 \times cos(y)  + 0.0003 \times cos(y)
                \\ \ \ \ \ \ \ \ \ + i(  - 0.0331 \times sin(y)  + 0.0249 \times sin(y)  + 0.0613 \times sin(y)  + 0.0006 \times sin(y)  + 0.0048 \times sin(y)  - 0.003 \times sin(y)  - 0.0018 \times sin(y)  - 0.0247 \times sin(y)  - 0.0051 \times sin(y)  + 0.0163 \times sin(y)  - 0.0108 \times sin(y)  - 0.0107 \times sin(y)  + 0.0002 \times sin(y)  + 0.0059 \times sin(y)  - 0.0045 \times sin(y)  + 0.0062 \times sin(y)  - 0.0014 \times sin(y)  + 0.0005 \times sin(y)  - 0.0035 \times sin(y)  + 0.0034 \times sin(y)  - 0.0049 \times sin(y)  - 0.0004 \times sin(y)  + 0.0002 \times sin(y)  + 0.0001 \times sin(y)  + 0.0026 \times sin(y)  - 0.0009 \times sin(y)  - 0.0023 \times sin(y)  + 0.0005 \times sin(y)  - 0.0005 \times sin(y)  - 0.0017 \times sin(y)  - 0.0012 \times sin(y)  + 0.0007 \times sin(y)  - 0.0012 \times sin(y)  - 0.0003 \times sin(y)  - 0.0007 \times sin(y)  + 0.0013 \times sin(y)  - 0.0017 \times sin(y)  - 0.0004 \times sin(y)  - 0.0001 \times sin(y)  + 0.001 \times sin(y)  + 0.0004 \times sin(y)  - 0.0001 \times sin(y)  + 0.0005 \times sin(y)  + 0.0006 \times sin(y)  - 0.0008 \times sin(y)  + 0.0004 \times sin(y)  + 0.0001 \times sin(y)  - 0.0006 \times sin(y)  - 0.0 \times sin(y)  - 0.0007 \times sin(y)  - 0.0 \times sin(y)  - 0.0003 \times sin(y)  + 0.0004 \times sin(y)  - 0.0 \times sin(y)  + 0.0002 \times sin(y)  - 0.0003 \times sin(y)  + 0.0006 \times sin(y)  - 0.0002 \times sin(y)  - 0.0003 \times sin(y)  + 0.0003 \times sin(y)  - 0.0004 \times sin(y)  + 0.0004 \times sin(y)  - 0.0003 \times sin(y)  - 0.0 \times sin(y)  - 0.0001 \times sin(y)  + 0.0001 \times sin(y)  + 0.0003 \times sin(y)  - 0.0003 \times sin(y)  + 0.0005 \times sin(y)  - 0.0001 \times sin(y)  - 0.0001 \times sin(y)  - 0.0004 \times sin(y)  - 0.0001 \times sin(y)  - 0.0002 \times sin(y)  - 0.0 \times sin(y)  + 0.0003 \times sin(y)  - 0.0003 \times sin(y)  + 0.0004 \times sin(y)  + 0.0003 \times sin(y)  + 0.0001 \times sin(y)  - 0.0002 \times sin(y)  + 0.0002 \times sin(y)  - 0.0002 \times sin(y)  - 0.0001 \times sin(y)  + 0.0 \times sin(y)  - 0.0002 \times sin(y)  + 0.0002 \times sin(y)  + 0.0002 \times sin(y)  - 0.0001 \times sin(y)  + 0.0003 \times sin(y)  - 0.0002 \times sin(y)  - 0.0005 \times sin(y)  + 0.0001 \times sin(y)  - 0.0003 \times sin(y)  + 0.0001 \times sin(y)  + 0.0 \times sin(y)  - 0.0002 \times sin(y)  - 0.0002 \times sin(y)  + 0.0002 \times sin(y)  + 0.0 \times sin(y))
            $$
        </Latex>
    </>
}