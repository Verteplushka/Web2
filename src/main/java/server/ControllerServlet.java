package server;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.logging.Level;
import java.util.logging.Logger;

@WebServlet(name = "ControllerServlet", value = "/ControllerServlet")
public class ControllerServlet extends HttpServlet {
    private static final Logger logger = Logger.getLogger(ControllerServlet.class.getName());
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getParameter("x") != null & request.getParameter("y") != null & request.getParameter("r") != null) {
            response.sendRedirect(this.getServletContext().getContextPath() + "/AreaCheck?x=" + request.getParameter("x")
                    + "&y=" + request.getParameter("y") + "&r=" + request.getParameter("r"));
        } else {
            PrintWriter printWriter = response.getWriter();
            printWriter.println("Request with empty fields 0_0");
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletContext servletContext = getServletContext();
        ArrayList<Dot> dotsList = (ArrayList<Dot>) servletContext.getAttribute("dotsList");

        resp.getWriter().write(dotsList.toString());
    }
}
