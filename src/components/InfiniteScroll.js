import { useRef, useCallback, useState } from 'react'

import '../index.css'

const InifiteScroll = (props) => {
    const scrollRef = useRef()
    const [isLoading, setLoading] = useState(false)
    let loading = false

    const scrollLoad = useCallback(async () => {
        const shift = scrollRef.current.scrollHeight - scrollRef.current.scrollTop - scrollRef.current.clientHeight
        if ((shift <= 0) && props.hasMore && !loading) {    
            loading = true
            setLoading(true)
            await props.loadMore()
            setLoading(false)     
            loading = false  
        } 
    }, [props.hasMore])

    return(
        <>
            <div className={'max-h-full overflow-auto hide-scroll'} ref={scrollRef} onScroll={() => scrollLoad()}>
                {props.children}
                {isLoading && props.loader}
            </div>
        </>
    )
}

export default InifiteScroll