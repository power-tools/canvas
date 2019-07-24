Set(
    AppTitle,
    "Canvas Starter Template"
);
Set(
    _CurrentNavItem,
    1
);
Set(
    _CurrentNavItem,
    Max(
        NavItems,
        Number
    )
);
Set(
    _Separator,
    If(
        Left(
            Text(
                0.1,
                "[$-en-us]#.0"
            ),
            1
        ) = ".",
        ",",
        ";"
    )
);
// auto detect ; or ,
ClearCollect(
    NavItems,
    {
        number: 1,
        icon: Basel_Home,
        name: "Welcome",
        screen: L01_Welcome
    },
    {
        number: 2,
        icon: Basel_Compose,
        name: "About",
        screen: L02_About
    },
    {
        number: 3,
        icon: Basel_draw,
        name: "Basics",
        screen: L03_Basics
    },
    {
        number: 4,
        icon: Basel_Note,
        name: "Test",
        screen: Test
    }
)