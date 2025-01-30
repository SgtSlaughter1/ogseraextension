<template>
    <nav class="navbar navbar-expand-lg bg-white">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="/src/assets/Home/logo .png" alt="GSQ Logo" height="50">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                       <router-link to="/tsp" class="nav-link">TSP</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Awarding Bodies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Certifications</a>
                    </li>
                    <li class="nav-item ms-3">
                        <router-link to="/login" class="btn btn-success px-4">Login as TSP</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.navbar {
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.navbar-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.brand-text {
    font-weight: bold;
    font-size: 1.5rem;
    color: #333;
}

.nav-link {
    color: #333;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #28a745;
}

.btn-success {
    background-color: #28a745;
    border: none;
    font-weight: 500;
}

.btn-success:hover {
    background-color: #218838;
}

@media (max-width: 991px) {
    .navbar-nav {
        padding: 1rem 0;
    }
    
    .nav-item {
        margin: 0.5rem 0;
    }
    
    .ms-3 {
        margin-left: 0 !important;
        margin-top: 1rem;
    }
}
</style>
