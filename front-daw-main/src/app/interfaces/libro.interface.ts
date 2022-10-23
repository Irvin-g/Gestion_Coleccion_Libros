export interface Libro {
    idLibro?: number;
    nombreLibro?: string;
    descripcion?: string;
    yearPublicacion?: string;
    noPaginas?: string;
    precio?: string;

    idAutor?: number;
    idColeccion?: number;

    estado?: string;
    createdBy?: number;
}

export interface LibrosView {
    idLibro?: number;
    nombreLibro?: string;
    descripcion?: string;
    yearPublicacion?: string;
    noPaginas?: string;
    precio?: string;

    nombreAutor?: string;
    nombreColeccion?: string;
    
    estado?: string;
    createdBy?: number;
}
