'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { Input } from '@chakra-ui/react'


export default function Success(props: {title: string}) {

    const [title, setTitle] = useState<string>(props.title)
    const[lenghtTitle, setLenghtTitle] = useState(0)

    useEffect(() => {

      setLenghtTitle(title.length)

    }, [title])

    const onChangeInput = (e:any) =>  {
      
      setTitle(e.target.value)

      if(e.target.value.length == 0){
        setTitle(props.title)
      }
      
    } 

  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {title}
      </Heading>
      <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
      <h1>{lenghtTitle}</h1>
      <Input placeholder='Basic usage'
      onChange={onChangeInput} />
    </Box>
  )
}