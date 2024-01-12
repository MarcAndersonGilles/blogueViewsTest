"use client"
import { supabase } from '@/supabase/supabaseClient'
import React, {useEffect, useState} from 'react'

function Views() {
  const [supabaseData, setSupabaseData] = useState<any[]>([])

  // const testSupabase = async () => {
  //   const { data, error } = await supabase
  //     .from('pages')
  //     .select('*')
  //   console.log(data)
  //   if(error){
  //     console.log(error)
  //   }
  //   if(data){
  //     setSupabaseData(data)
  //   }
   
  // }
  // useEffect(() => {
  //   testSupabase()
  // },[])
  return (
    <div>Blogue</div>
  )
}

export default Views