

    .Container{
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    .card{
        position: relative;
        background-color: var(--container-color);
        padding: 1.25rem 0;
        border: 1px solid var(--border-color);
        text-align: center;
        transition: .3s;
    }
    .img{
        height: 125px;
        margin-bottom: var(--mb-1);
    }
   .title,
    .price{
        font-size: var(--small-font-size);
        font-weight: var(--font-medium);
    }
    .title{
        text-transform: uppercase;
        margin-bottom: var(--mb-0-5);
    }
    .price{
        color: var(--first-color);
    }
    .button{
        background-color: var(--button-color);
        padding: .4rem;
        color: #fff;
        font-size: 1rem;
        position: absolute;
        right: 0;
        bottom: 0;
        transition: .3s;

        
    }
    button:hover{
        background-color: var(--button-color-alt);
    }