package server;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;

import static java.lang.System.currentTimeMillis;
import static java.lang.System.nanoTime;

@WebServlet(name = "AreaCheckServlet", value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        long startTime = nanoTime();
        int x = Integer.parseInt(request.getParameter("x"));
        double y = Double.parseDouble(request.getParameter("y"));
        double r = Double.parseDouble(request.getParameter("r"));

        String result;
        if((x<=0 & y<=0 & x>=-r & y>=-r) || (x<=0 & y>0 & x*x+y*y<=r*r) || (x>0 & y>0 & x<=r/2 & y<=-2*x+r)){
            result = "hit";
        }else{
            result = "miss";
        }

        PrintWriter printWriter = response.getWriter();
        printWriter.println("<tr>");
        String[] elements = {String.format("%d", x), String.format("%.15f", y), String.format("%.15f", r), LocalDate.now().toString(), Long.toString((nanoTime() - startTime)), result};
        for (String element : elements) {
            printWriter.println("<td>" + element + "</td>");
        }
        printWriter.println("</tr>");
    }
}
