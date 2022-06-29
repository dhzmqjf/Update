import { useRouter } from 'next/router'
import React from 'react'

export default function index() {

  const router = useRouter()

  return (
    <div>
      안녕하세요! 게시글 상세페이지 입니다!!
      게시글 ID는 {router.query.boardId}
    </div>
  )
}
