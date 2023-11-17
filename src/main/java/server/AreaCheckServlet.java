package server;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;
import java.util.ArrayList;

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

        Dot newDot = new Dot(x, y, r, LocalDate.now(), (nanoTime() - startTime), result);
        ServletContext servletContext = getServletContext();
        ArrayList<Dot> prevDotsList = (ArrayList<Dot>) servletContext.getAttribute("dotsList");
        if(prevDotsList!=null){
            prevDotsList.add(newDot);
            servletContext.setAttribute("dotsList", prevDotsList);
        } else{
            ArrayList<Dot> newDotsList = new ArrayList<>();
            newDotsList.add(newDot);
            servletContext.setAttribute("dotsList", newDotsList);
        }

        StringBuilder responseTable = new StringBuilder();
        responseTable.append("<tr>");
        String[] elements = {Integer.toString(newDot.getX()), Double.toString(newDot.getY()), Double.toString(newDot.getR()), newDot.getCurrentTime().toString(), Long.toString(newDot.getScriptTime()), newDot.getResult()};
        for (String element : elements) {
            responseTable.append("<td>").append(element).append("</td>");
        }
        responseTable.append("</tr>");
        PrintWriter printWriter = response.getWriter();
        printWriter.println(responseTable);
    }
}
