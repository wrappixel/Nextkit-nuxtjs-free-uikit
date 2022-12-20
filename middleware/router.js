export default function ({route,store, redirect}) {
    if (route.path === '/new-home') {
        redirect('/')
    }
} 