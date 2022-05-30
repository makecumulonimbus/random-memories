import { useRouter } from 'next/router'
export default () => {
    const router = useRouter()
    const pathData = router.query
    console.log(pathData)
   
    const { id } = router.query
    return (
      <div>
        <p>This issdd #{id}</p>
      </div>
    )
  }