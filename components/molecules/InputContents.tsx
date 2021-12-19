import React, { useState } from 'react'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
// import { marked } from 'marked'

export const InputContents = () => {
  const [markdown, setMarkdown] = useState('')

  return (
    <div>
      <SimpleMDE onChange={(e) => setMarkdown(e)} />
      {/* <div id="body">
        <span dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
      </div> */}
    </div>
  )
}

// import React, { useState } from 'react'
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea
// } from '@chakra-ui/react'
// import { useFormContext } from 'react-hook-form'
// import SimpleMDE from 'react-simplemde-editor'
// import 'easymde/dist/easymde.min.css'
// import marked from 'marked'
// import highlight from 'highlightjs'
// import 'highlightjs/styles/docco.css'

// export const InputContents = () => {
//   const {
//     register,
//     formState: { errors }
//   } = useFormContext()
//   const [markdown, setMarkdown] = useState('')
//   return (
//     <Box w="800px">
//       <FormControl isInvalid={errors.title}>
//         <FormLabel>タイトル</FormLabel>
//         <Input
//           type="text"
//           id="title"
//           {...register('title', {
//             required: 'タイトルを入力してください',
//             maxLength: {
//               value: 255,
//               message: 'タイトルは225文字以内で入力してください'
//             }
//           })}
//         ></Input>
//       </FormControl>
//       <FormControl>
//         <FormLabel>本文</FormLabel>
//     <Textarea
//         h="300px"
//         id="contents"
//         {...register('contents', {
//           required: '本文を入力してください'
//         })}
//       ></Textarea>
//       </FormControl>
//       <Button type="submit">投稿</Button>
//     </Box>
//   )
// }
